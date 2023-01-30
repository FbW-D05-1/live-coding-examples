import { useFetch } from "../hooks/useFetch";

export default function FetchingSMthing() {
  const [url, setUrl] = useState("deezer.api.com/eminem");

  const { data: songs } = useFetch(url);

  return <div>FetchingSMthing</div>;
}
