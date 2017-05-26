export interface IArtist {
    external_urls: {
        spotify: string;
    },
    genres?: string[],
    href: string;
    id: string;
    images?: IImage[];
    name: string;
    popularity?: number;
    type: string;
    uri: string;
}

export interface IImage{
    height: number;
    url: string;
    width: number
}

export interface IAlbum {
    album_type : string;
    artists : IArtist[];
    available_markets : string[];
    external_urls : {
      spotify : string;
    },
    href :  string;
    id :  string;
    images : IImage[];
    name : string;
    type : string;
    uri : string;
  }