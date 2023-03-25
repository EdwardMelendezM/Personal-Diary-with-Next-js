interface Props {
  params: {
    id: string
  }
}
export default function PostId ({ params }:Props) {
  const { id } = params
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
};
