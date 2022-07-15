import fetchApi from '@utils/fetch';

export const uploadImage = async (file: File): Promise<string | false> => {
  try {
    const formData = new FormData();
    formData.append('images', file);
    const res = await fetchApi.postFile('/api/images', formData);
    if (res.status === 404) throw new Error('error');
    const { imageUrl } = await res.json();
    return imageUrl;
  } catch (err) {
    return false;
  }
};
