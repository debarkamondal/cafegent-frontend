import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";


const qrcodeDivId = "qrbox";
// Creates the configuration object for qrScanner.
const createConfig = (props: any) => {
  const config: {
    fps: number;
    qrbox: { width: number; height: number };
    aspectRatio: number;
    disableFlip: boolean;
  } = {
    fps: 10,
    qrbox: { width: 250, height: 250 },
    aspectRatio: 1,
    disableFlip: false,
  };
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};



const Qrcode = (props: any) => {
  let cameraId = { facingMode: "user" };
  const [qrContents, setqrContents] = useState<any>();
    
  useEffect(() => {
    setqrContents(localStorage.getItem("qrContents"))
    const config = createConfig(props);
    const qrScanner = new Html5Qrcode(qrcodeDivId);

    const onSuccess = async (decodedText: any, decodedResult: any) => {
      setqrContents(decodedText)
      localStorage.setItem("qrContents", qrContents)
      qrScanner.stop()
    };

    const onError = (errorMessage: string): any => {
      // console.error(errorMessage)
    };

    qrScanner
      .start(cameraId, config, onSuccess, onError)
      .catch((error) => {
        console.log(error);
      });

    // cleanup function when component will unmount
    return () => {
      try {
        qrScanner.clear();
      } catch (error: any) {
        console.error("Failed to clear qrScanner. ", error);
      }
    };
  }, []);

  return <>
  <div id={qrcodeDivId} style={{ width: "300px" }} />
  {(qrContents!=='undefined')? (<div>{qrContents}</div>) : null}
  {/* {console.log(qrContents)} */}
  </>
};

export default Qrcode;
