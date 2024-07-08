interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GDG Busan Organizer',
    description: `GDG는 구글 플랫폼에 관련된 개발 활동을 하는 개발자들의 커뮤니티를 뜻합니다.
    GDG 부산챕터의 오거나이저로써 다양한 모임에 참여하여 생산적인 토론을 하거나,
    세미나를 개최하여 개발자들과의 교류를 정기적으로 진행하고 있습니다.`,
    imgSrc: '/static/images/gdg.svg',
    href: 'https://gdg.community.dev/gdg-busan/',
  },
  {
    title: 'DND',
    description: `DND는 서울에 편중되어 있는 기술 공유와 세미나를
    지방에서도 나누고자 2019년 설립되었습니다.
    8주간 개발자와 디자이너가 협업하는 사이드 프로젝트의 팀빌딩부터 최종 프로젝트 마무리까지 서포트 해드리는 것을 주 활동으로 하고 있으며, '프로젝트에 즐거움을, 모두에게 기회를' 이라는 슬로건 아래 우리는 함께 배우고 자라며 교육 기회의 평등함을 위해 지식 나눔 세미나 또한 DND 내외부로 적극적으로 운영하고 있습니다.`,
    imgSrc: '/static/images/dnd.png',
    href: 'https://dnd.ac',
  },
  {
    title: '프로그래머스',
    description: `빅데이터 플랫폼 프론트엔드 엔지니어링 과정 멘토활동 (2021.03 ~ 2024.02)`,
    imgSrc: '/static/images/prgms.png',
    href: 'https://prgms.tistory.com/120',
  },
]

export default projectsData
