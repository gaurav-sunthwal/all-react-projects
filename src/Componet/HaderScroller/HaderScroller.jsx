import { useEffect, useState } from "react";
import "./HaderScroll.css";
import { Box } from "@chakra-ui/react";

function HaderScroller() {
  const [scrollPercent, setScrollPercent] = useState(0);

  function handleScroll() {
    const howMuchToScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercent((howMuchToScroll / height) * 100);
    console.log((howMuchToScroll / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <Box w={"100%"} h={1} bg={"#171717"} zIndex={4} position={"fixed"}>
      <Box w={`${scrollPercent}%`} h={1} bg={"red"} zIndex={4} position={"fixed"}></Box>
    </Box>
  );
}

export default HaderScroller;
