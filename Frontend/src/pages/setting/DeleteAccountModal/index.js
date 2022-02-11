import React from "react";
import Modal from "@/components/Modal";
import Description from "@/components/Description";
import SadIcon from "@/assets/icon/sad-face.svg";
import { Wrapper } from "./style";

function DeleteAccountModal({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="GitFarm 탈퇴하기" twoBtn={true}>
      <Wrapper>
        <Description>
          GitFarm 내의 모든 정보를 삭제하고
          <br />
          정말로 탈퇴하시겠습니까? <br />
          사라진 계정 정보는 복구할 수 없습니다.
        </Description>
        <SadIcon />
      </Wrapper>
    </Modal>
  );
}

export default DeleteAccountModal;
