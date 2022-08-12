import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { debounce, getSearch } from "../../custom-axios";
import ResultList from "./ResultList";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleQuery = debounce(setQuery, 500);

  useEffect(() => {
    if (query === "") {
      setResult(null);
      return;
    }
    getSearch(query, 1).then((res) => {
      setResult(res.data.results);
    });
  }, [query]);
  return (
    <Block>
      <input type="text" onChange={(e) => handleQuery(e.target.value)} />
      {result && <ResultList result={result} />}
    </Block>
  );
}

const Block = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px 5px;
  position: relative;
  input {
    border: none;
    background: none;
    outline: none;
  }
`;
