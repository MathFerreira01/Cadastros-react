import React, { useState } from "react";
import "./Posts.css";

const Posts = ({ data, loading }) => {
  const [busca, setBusca] = useState("");
  console.log(busca);

  const nomesFiltradas = data.filter((data) =>
    data.name.toLowerCase().startsWith(busca.toLowerCase())
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {console.log(data)}
      <div>
        <input
          className="input--name"
          placeholder=" Pesquisar"
          type="text"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        ></input>
      </div>
      <table className="tabela">
        <tr>
          <th className="cabecalho--name">Nome</th>
          <th className="cabecalho--age">Idade</th>
        </tr>
        {nomesFiltradas.map((data, index) => (
          <tr key={index}>
            <td className="name">{data.name}</td>
            <td className="age">{data.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Posts;

