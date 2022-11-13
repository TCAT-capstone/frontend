import imageCompression from 'browser-image-compression';

export const compressImage = async (image: File, maxWidthOrHeight: number): Promise<File> => {
  const options = {
    maxSizeMb: 1,
    maxWidthOrHeight,
  };
  const file = await imageCompression(image, options);
  return file;
};
