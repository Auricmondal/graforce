import ImageScroller from '@/components/shared/gallery/ImageScroller'
import CardWrapper from '@/wrappers/CardWrapper'
import GalleryImage1 from "@/assets/about/gallery-image-1.jpg"
import GalleryImage2 from "@/assets/about/gallery-image-2.jpg"
import React from 'react'

const TeamRightCard = ({ className }) => {
  const imagesCopy1 = [
    {
      id: 1,
      name: 'Jhon Doe',
      title: 'Software Engineer',
      image: GalleryImage1
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Product Manager',
      image: GalleryImage1
    },
    {
      id: 3,
      name: 'Alice Johnson',
      title: 'UX Designer',
      image: GalleryImage1
    },
    {
      id: 4,
      name: 'Bob Brown',
      title: 'Data Scientist',
      image: GalleryImage1
    },
    {
      id: 5,
      name: 'Jhon Doe',
      title: 'Software Engineer',
      image: GalleryImage1
    },
    {
      id: 6,
      name: 'Jane Smith',
      title: 'Product Manager',
      image: GalleryImage1
    },
    {
      id: 7,
      name: 'Alice Johnson',
      title: 'UX Designer',
      image: GalleryImage1
    },
    {
      id: 8,
      name: 'Bob Brown',
      title: 'Data Scientist',
      image: GalleryImage1
    },
  ];
  const images1 = [
    ...imagesCopy1,
    ...imagesCopy1,
    ...imagesCopy1,
  ];

  const imagesCopy2 = [
    {
      id: 1,
      name: 'Jhon Doe',
      title: 'Software Engineer',
      image: GalleryImage2
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Product Manager',
      image: GalleryImage2
    },
    {
      id: 3,
      name: 'Alice Johnson',
      title: 'UX Designer',
      image: GalleryImage2
    },
    {
      id: 4,
      name: 'Bob Brown',
      title: 'Data Scientist',
      image: GalleryImage2
    },
    {
      id: 5,
      name: 'Jhon Doe',
      title: 'Software Engineer',
      image: GalleryImage2
    },
    {
      id: 6,
      name: 'Jane Smith',
      title: 'Product Manager',
      image: GalleryImage2
    },
    {
      id: 7,
      name: 'Alice Johnson',
      title: 'UX Designer',
      image: GalleryImage2
    },
    {
      id: 8,
      name: 'Bob Brown',
      title: 'Data Scientist',
      image: GalleryImage2
    }
  ];
  const images2 = [
    ...imagesCopy2,
    ...imagesCopy2,
    ...imagesCopy2,
  ];

  return (
    <CardWrapper color='transparent' variant='custom' className={`flex flex-col gap-4 justify-center h-full ${className}`}>
      <div className="rounded-xl overflow-hidden max-h-1/2 max-w-full">
        <ImageScroller scrollImage={images2} aspect="3/4" className="" direction="left" duration={20} />
      </div>
      <div className="rounded-xl overflow-hidden max-h-1/2 max-w-full">
        <ImageScroller scrollImage={images1} aspect="16/9" className="" direction="right" duration={20} />
      </div>
    </CardWrapper>
  )
}

export default TeamRightCard