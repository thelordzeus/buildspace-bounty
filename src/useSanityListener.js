import { useEffect, useState } from "react";

const useSanityListener = (client) => {
  const [leaderBoards, setLeaderBoard] = useState([]);

  //Listen for data changes in Sanity
  const query = '*[_type == "leaderBoard"]';
  const params = {};

  fetchRecords();

  useEffect(() => {
    const subscription = client
      .listen(query, params)
      .subscribe((newRecords) => {
        console.log(JSON.stringify(newRecords.result, null, 4));

        let item = newRecords.result;

        let records = [...leaderBoards, item];
        setLeaderBoard(records);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [client]);

  function fetchRecords() {
    client.fetch(query, params).then((records) => {
      console.log(records);
      setLeaderBoard(records);
    });
  }

  return { leaderBoards, setLeaderBoard };
};

export default useSanityListener;
