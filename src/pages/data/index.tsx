import { FC, useState, Dispatch, SetStateAction } from "react";
import Head from "next/head";
import { getUsers } from "@/api/fetchUsers";

const Data = () => {
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [personData, setPersonData] = useState<any>();
  const [showUsers, setShowUser] = useState(true);

  async function getData() {
    const data = await getUsers();
    console.log(data);
    setDataArray(data);
  }

  function selectUser(data: any) {
    console.log("on click");
    setPersonData(data);
    setShowUser(false);
  }

  return (
    <div className="data">
      <Head>
        <title>Data</title>
      </Head>
      <button onClick={getData}>Get data</button>
      {showUsers ? (
        <UsersTable data={dataArray} selectFunction={selectUser} />
      ) : (
        <PersonTable data={personData} showFunction={setShowUser} />
      )}
    </div>
  );
};

const UsersTable: FC<{
  data: any[];
  selectFunction: (D: any) => void;
}> = (props) => {
  return (
    <table className="table table--hoverable is-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data, idx) => {
          return (
            <tr key={idx} onClick={() => props.selectFunction(data)}>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const PersonTable: FC<{
  data: any;
  showFunction: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  const data = props.data;
  const address = data.address;
  const addressText = `Suite: ${address.suite}, St.: ${address.street}, City: ${address.city}, Zip: ${address.zipcode}`;

  return (
    <div>
      <button onClick={() => props.showFunction(true)}>Back</button>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.website}</td>
            <td>{addressText}</td>
            <td>{data.company.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Data;
