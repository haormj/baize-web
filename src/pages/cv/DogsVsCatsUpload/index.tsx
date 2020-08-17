import axios from 'axios';
import styles from './index.less';
import React from 'react';
import { Upload, message, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import OSS from 'ali-oss';
import { GetUploadParam, GetUploadParamOutputType } from '@/services/DogsVsCats/GetUploadParam';
import { Classify, ClassifyOutputType } from '@/services/DogsVsCats/Classify';

class DogsVsCatsUpload extends React.Component {
  state = {
    loading: false,
    imageUrl: '',
    classifyResult: '',
  };

  beforeUpload = async (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  uploadImage = async (options) => {
    const { file } = options;
    const getUploadParamOutput = await GetUploadParam({});
    try {
      this.setState({ loading: true });
      const client = new OSS({
        region: getUploadParamOutput.region_id,
        accessKeyId: getUploadParamOutput.access_key_id,
        accessKeySecret: getUploadParamOutput.access_key_secret,
        bucket: getUploadParamOutput.bucket,
        stsToken: getUploadParamOutput.security_token,
      });
      await client.put(getUploadParamOutput.object_key, file).then((result) => {});
      const classifyOutput = await Classify({
        object_key: getUploadParamOutput.object_key,
      });
      this.setState({
        imageUrl: classifyOutput.image_url,
        loading: false,
        classifyResult: classifyOutput.result,
      });
    } catch (err) {
      console.log('Eroor: ', err);
    }
  };

  handleOnChange = (options) => {
    if (options.file.status === 'uploading') {
      return;
    }
    if (options.file.status === 'done') {
      this.setState({
        imageUrl: '',
        loading: false,
        classifyResult: '',
      });
      this.uploadImage(options);
    }
  };
  handleOnRemove = (file) => {
    return true;
  };

  render() {
    // Get this url from response in real world.
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className={styles.container}>
        <Upload
          accept="image/*"
          customRequest={this.uploadImage}
          onChange={this.handleOnChange}
          listType="picture-card"
          showUploadList={false}
          beforeUpload={this.beforeUpload}
          onRemove={this.handleOnRemove}
        >
          {this.state.imageUrl ? (
            <div>
              <img src={this.state.imageUrl} style={{ width: '100%' }} />
              <p>{this.state.classifyResult}</p>
            </div>
          ) : (
            uploadButton
          )}
        </Upload>
      </div>
    );
  }
}

export default () => <DogsVsCatsUpload />;
