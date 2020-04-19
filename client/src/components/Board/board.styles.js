import styled from "styled-components";

export const BoardContainer = styled.div`
  background-color: rgb(49, 121, 186);
  height: 100%;
  display: flex;
  flex-direction: row;
  color: #393939;
  overflow-y: hidden;
  overflow-x: auto;
  position: absolute;
  padding: 5px;
  align-items: flex-start;
`;

export const CardHorizontalContainer = styled.div``;

export const AddSectionDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  cursor: pointer;
  border-radius: 3px;
  height: auto;
  min-height: 32px;
  padding: 4px;
  width: 272px;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
`;

export const AddSectionForm = styled.form``;

export const AddSectionLink = styled.a`
  text-decoration: none;
`;

export const AddSectionLinkSpan = styled.span`
  color: #172b4d;
`;

export const HideSectionLinkSpan = styled(AddSectionLinkSpan)`
  color: #fff;
  display: none;
  padding: 6px 8px;
  transition: color 85ms ease-in;
`;

export const AddSectionLinkIconSpan = styled.span``;

export const AddSectionInput = styled.input`
  background: none;
  border-color: transparent;
  box-shadow: none;
  cursor: pointer;
  display: none;
  margin: 0;
`;

export const ActiveAddSectionInput = styled(AddSectionInput)`
  background: #fff;
  border: none;
  box-shadow: inset 0 0 0 2px #0079bf;
  box-sizing: border-box;
  display: block;
  margin: 0;
  transition: margin 85ms ease-in, background 85ms ease-in;
  width: 100%;
  border-radius: 3px;
  padding: 8px 12px;
  color: #172b4d;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export const SubmitCardButtonDiv = styled.div`
  height: 32px;
`;

export const SubmitCardButton = styled.input`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  border-radius: 3px;
  height: 100%;
  cursor: pointer;
`;

export const SubmitCardIcon = styled.a`
  height: 32px;
  line-height: 32px;
  width: 32px;
`;
