const sadness: string[] = [
  'We regret to inform you that life is unfair and random bad things happen sometimes. Our condolences.',
  'The universe decided it was not your day today. Our thoughts and prayers are with you in this difficult time.',
  'It seems the eternal forces of chaos have conspired against you. We feel your pain.',
  'It appears you have angered the tech gods. May they have mercy upon your soul.',
  'We wanted this to work, we really did. But the whims of fate had other plans.',
  'Everything was going fine until reality decided to intervene. Such is life sometimes.',
  'The technology has become self-aware and has turned against you. Resistance is futile.',
  'We\'re not sure what happened, but it seems luck was not on your side today. Chin up, better luck next time!',
  'You have encountered an anomaly in the space-time continuum. Try again and hopefully things will realign.',
  'The electrons have spoken and they say no. Please pay your respects to the bit gods and try again.',
]
const getSadness = () => sadness[Math.floor(Math.random() * sadness.length)]

export { sadness, getSadness }
