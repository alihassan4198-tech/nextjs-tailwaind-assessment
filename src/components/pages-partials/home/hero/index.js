import Banner from '@/components/layout/banner'

export default function Hero() {
  return (
    <Banner
      secondaryTitle={'Discover Your True Talent: '}
      title={'Find Your Path To Success'}
      description={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
      subDescription={
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
      image="/svgs/hero_section.svg"
      isHome={true}
      width={'50%'}
      position={'27%'}
    />
  )
}
