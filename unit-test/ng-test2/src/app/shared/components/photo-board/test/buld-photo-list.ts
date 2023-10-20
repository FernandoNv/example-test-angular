import { Photo } from '../interfaces/photo';

export function buildPhotoList(): Photo[]{
  const photos: Photo[] = [];
  const count = 8;

  for(let i = 1; i < count+1; i++){
    const photo: Photo = {
      id: i,
      url: `http://somephoto.com/image${i}.img`,
      description: `Some description ${i}`
    }

    photos.push(photo);
  }

  return photos;
}