import Qrcode from "@/components/Qrcode";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { phoneUpdate, qrSuccess } from "@/redux/reservationSlice";

const host = process.env.REACT_APP_BACKEND_URL;

const booktable = () => {
  const reservation = useSelector((state: RootState) => state.reservation);
  const dispatch = useDispatch();
  const [output, setoutput] = useState(0); // using state to keep the output of the qrcode component streamlined for reuse

  const handleUpdate = (event: any): void => {
    dispatch(phoneUpdate(event.target.value));
  };

  const handleClick = () => {
    const bookTable = async (url = `${host}/api/table/book`) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tableNo: reservation.table,
          phone: reservation.phone,
        }),
      });
      let { authToken } = await response.json();
      localStorage.setItem("authToken", authToken);
    };

    useEffect(() => {
      dispatch(qrSuccess(output));
    });

    if (!output)
      // Rendering qrSanner component if not scanner already
      return (
        <div>
          <Qrcode
            fps={10}
            qrbox={{ width: 250, height: 250 }}
            disableFlip={false}
            output={setoutput}
          />
        </div>
      );
    else
      return (
        <>
          {output ? <div>Table :{output}</div> : null}
          <input type="text" onChange={handleUpdate} />
          <button onClick={handleClick} />
        </>
      );
  };
};

export default booktable;
