import styled from "styled-components";
import { motion } from "framer-motion";

export const ViewBox = styled.div`
  position: relative;
  height: 420px;
  width: 100%;
  max-width: 756px;
  margin: 0;
  overflow: hidden;
  border: 1px solid #ccc;
`;
export const ImageBox = styled(motion.div)`
  position: absolute;
  height: 420px;
  width: 756px;
  top: 0;
  left: 0;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageCopy = styled(motion.div)`
  position: absolute;
  top: 10px;
  left: 30px;

  & > h1 {
    color: #ffffff;
    font-family: "myRoboto";
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
