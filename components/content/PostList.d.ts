/** Ruled list of blog posts: title, mono date, optional one-line description. */
export interface PostListItem { title: string; date: string; description?: string; href?: string; tags?: string[] }
export interface PostListProps {
  posts?: PostListItem[];
  /** Shown when posts is empty */
  emptyText?: string;
  onOpen?: (post: PostListItem, index: number) => void;
}
export function PostList(props: PostListProps): JSX.Element;
