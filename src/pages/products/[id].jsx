import { useParams } from "react-router-dom";
const ProductDetail = () => {
  let { id } = useParams();

  return <div>{id}번 상품상세페이지 입니다.</div>;
};

export default ProductDetail;
