export class Headline {

  title: string;
  content: string[];
  imageName: string;

}

export const HEADLINES: Headline [] = [
    {title: 'nieuws', content: ['Dit is de inhoud op de eerste regel.', 'Dit is de inhoud van de tweede paragraaf'], imageName: 'card_club_black.png'},
    {title: 'activiteiten', content: ['Dit is de inhoud.'], imageName: 'card_heart_red.png'},
    {title: 'blog', content: ['Dit is de inhoud.'], imageName: 'card_spade_black.png'},
    {title: 'ledenbeheer', content: ['Dit is de inhoud.'], imageName: 'card_diamond_red.png'},
  ];
