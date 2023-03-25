import Qrcode from "@/components/Qrcode";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setTable, setPhone } from "@/redux/reservationSlice";
import { useRouter } from "next/router";

const BookTable = () => {
  const host = process.env.NEXT_PUBLIC_BACKEND_URL;
  const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

  const reservation = useSelector((state: RootState) => state.reservation);
  const dispatch = useDispatch();
  const router = useRouter();
  const [output, setoutput]: any = useState(); // using state to keep the output of the qrcode component streamlined for reuse

  const handleUpdate = (event: any): void => {
    dispatch(setPhone(event.target.value));
  };

  const handleClick = async () => {
    const url: string = `${host}:${port}/api/table/book/`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table: reservation.table,
        phone: reservation.phone,
      }),
    });
    let data = await response.json();
    if ("authToken" in data) {
      localStorage.setItem("authToken", data.authToken);
      router.push("/");
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    authToken ? router.push("/") : null;
    if (output) {
      let qrContent = JSON.parse(output);
      dispatch(setTable(qrContent.table));
    }
  }, [output]);

  if (!output)
    // Rendering qrSanner component if not scanner already
    return (
      <div>
        <Qrcode
          fps={10}
          qrbox={{ width: 250, height: 250 }}
          disableFlip={false}
          output={output}
          setoutput={setoutput}
        />
      </div>
    );
  else
    return (
      <>
        <div>Table :{JSON.parse(output).table}</div>
        <input type="text" onChange={handleUpdate} />
        <button onClick={handleClick}>Book</button>
      </>
    );
};

export default BookTable;
