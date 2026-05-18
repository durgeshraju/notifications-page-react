const notifications = [
  {
    id: 1,
    user: { name: 'Mark Webber', avatar: '/images/avatar-mark-webber.webp' },
    action: 'reacted to your recent post',
    post: { text: 'My first tournament today!' },
    isUnread: true,
    time: '1m ago',
  },
  {
    id: 2,
    user: { name: 'Angela Gray', avatar: '/images/avatar-angela-gray.webp' },
    action: 'followed you',
    isUnread: true,
    time: '5m ago',
  },
  {
    id: 3,
    user: { name: 'Jacob Thompson', avatar: '/images/avatar-jacob-thompson.webp' },
    action: 'has joined your group',
    group: { name: 'Chess Club' },
    isUnread: true,
    time: '1 day ago',
  },
  {
    id: 4,
    user: { name: 'Rizky Hasanuddin', avatar: '/images/avatar-rizky-hasanuddin.webp' },
    action: 'sent you a private message',
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isUnread: false,
    time: '5 days ago',
  },
  {
    id: 5,
    user: { name: 'Kimberly Smith', avatar: '/images/avatar-kimberly-smith.webp' },
    action: 'commented on your picture',
    picture: { src: '/images/image-chess.webp', alt: 'Chess picture' },
    isUnread: false,
    time: '1 week ago',
  },
  {
    id: 6,
    user: { name: 'Nathan Peterson', avatar: '/images/avatar-nathan-peterson.webp' },
    action: 'reacted to your recent post',
    post: { text: '5 end-game strategies to increase your win rate' },
    isUnread: false,
    time: '2 weeks ago',
  },
  {
    id: 7,
    user: { name: 'Anna Kim', avatar: '/images/avatar-anna-kim.webp' },
    action: 'left the group',
    group: { name: 'Chess Club' },
    isUnread: false,
    time: '2 weeks ago',
  },
]

export default notifications;
