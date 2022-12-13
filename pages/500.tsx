import ErrorCard from "../components/cards/Error";

export default function _500() {
  return <ErrorCard errorCode={500} />;
}
