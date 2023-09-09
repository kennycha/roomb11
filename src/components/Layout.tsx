import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
      <div>player</div>
      <div>tabs</div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
