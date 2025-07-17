export const validatePayload = (payload) => {
  if (typeof payload === 'object') {
    for (const key in payload) {
      if (typeof payload[key] === 'string') {
        payload[key] = payload[key]?.trim();
      }
      if (!payload[key]) {
        delete payload[key];
      }
    }
  }
  return payload;
};


const companyLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
];

export const getRandomImages = () => {
  const randomIndex = Math.floor(Math.random() * companyLogos.length);
  return companyLogos[randomIndex];
}

export const getDaysRemaining = (targetDateStr) => {
  const targetDate = new Date(targetDateStr);
  const currentDate = new Date();
  const diffMs = targetDate - currentDate;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));  
  return diffDays;
}