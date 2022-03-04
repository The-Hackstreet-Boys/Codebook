import axios from 'axios';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { MdClose, MdCode, MdImage, MdSend, MdTag } from 'react-icons/md';

import useCreatePost from '../../hooks/mutations/useCreatePost';
import { Tag } from '../../models/tag';
import TagDropdown from '../TagDropdown';
import Box, { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Typography from '../elements/Typography';
import './styles';
import {
  FileButton,
  IconContainer,
  ImagePreview,
  ImagePreviewContainer,
  ImagePreviewRemoveButton,
  SubmitButton,
  TextArea,
} from './styles';

const PostForm: FC = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();
  const [tags, setTags] = useState<Tag[]>([]);

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (image) {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'svryaukj');
      data.append('cloud_name', 'codebookspace');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/codebookspace/image/upload',
        data,
      );

      const { secure_url, width, height } = response.data;

      createPost({ text, image: { url: secure_url, width, height } });
      return;
    }

    createPost({ text });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setImage(file);
  };

  const handleRemoveImage = () => {
    setImage(undefined);
    setImageSrc(undefined);

    const fileInput = document.getElementById('fileInput');
    if (!fileInput) return;
    (fileInput as HTMLInputElement).value = '';
  };

  useEffect(() => {
    if (!image) return;
    setImageSrc(URL.createObjectURL(image));
  }, [image]);

  const onSuccess = () => {
    setText('');
    handleRemoveImage();
  };
  const addTag = (tag: Tag) => {
    setTags((oldValue) => [...oldValue, tag]);
  };
  const { mutate: createPost } = useCreatePost(onSuccess);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="What's on your mind?"
          value={text}
          required
          maxLength={10000}
          onChange={handleChangeText}
        />
        {imageSrc && (
          <Box width="fit-content" marginBottom="1rem">
            <Card padding="sm">
              <ImagePreviewContainer>
                <ImagePreview src={imageSrc} alt="Uploaded image" />
                <ImagePreviewRemoveButton>
                  <MdClose onClick={handleRemoveImage} />
                </ImagePreviewRemoveButton>
              </ImagePreviewContainer>
            </Card>
          </Box>
        )}
        <Flexbox gap="0.5rem" marginBottom="0.5rem" flexWrap="wrap">
          {tags?.map((tag) => (
            <div key={tag._id}>
              <Card padding="xs">
                <Typography>{tag.name}</Typography>
              </Card>
            </div>
          ))}
        </Flexbox>
        <IconContainer>
          <FileButton>
            <MdImage />
            <input type="file" name="file" onChange={handleChange} id="fileInput" />
          </FileButton>
          <TagDropdown addTag={addTag} />
          <MdCode />
          <SubmitButton>
            <MdSend />
          </SubmitButton>
        </IconContainer>
      </form>
    </Card>
  );
};

export default PostForm;
