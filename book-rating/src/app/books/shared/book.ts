export interface Thumbnail {
  url: string;
  title: string;
}

export interface Book {
  isbn: string;
  title: string;
  description: string;
  rating: number;

  // A - Liste von Thubnails (ohne eigenes Interface)
  // thumbnails: {
  //   url: string;
  //   title: string;
  // }[];

  // B
  // thumbnails: Thumbnail[];

  // C
  firstThumbnailUrl: string;
}
