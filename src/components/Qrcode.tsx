/**
 * ! Must pass state from the parent component to get output.
 * @param output is a state passed from the parent component to get the result of the qr for post processting
 */
import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

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
  const config = createConfig(props);
  let cameraId = { facingMode: "user" };
  let qrScanner: any;
  let output: any = {};

  // Handeling output when qrCode scan is successful
  const onSuccess = async (decodedText: any, decodedResult: any) => {
    try {
      await qrScanner.stop();
      qrScanner.clear();
      output = decodedText;
      props.setoutput(output); // Setting the state with output (qrContent), passed as props from the parent component
    } catch (error: any) {
      console.log(error);
    }
  };

  const onError = (errorMessage: string): any => {
    // console.error(errorMessage)
  };

  useEffect(() => {
    qrScanner = new Html5Qrcode(qrcodeDivId);
    qrScanner
      .start(cameraId, config, onSuccess, onError)
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div id={qrcodeDivId} style={{ width: "300px" }} />
    </>
  );
};

export default Qrcode;
