import { useState } from "react";
import Head from "next/head";
import { getUsers } from "@/api/fetchUsers";

const Data = () => {
  const [dataArray, setDataArray] = useState<any[]>([]);

  async function getData() {
    const data = await getUsers();
    console.log(data);
    setDataArray(data);
  }

  return (
    <div className="data">
      <Head>
        <title>Data</title>
      </Head>
      <button onClick={getData}>Get data</button>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((data, idx) => {
            return (
              <tr key={idx} onClick={() => console.log(data)}>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
