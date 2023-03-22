import styled from "styled-components";

const Sectioncontent = styled.section`
  padding: 0px 80px;
`;

const Headcontent = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.data.image});
`;

const Bodycontent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1d1d1d;
`;





const Footercontent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  img {
    width: 30%;
  }
`;

export default function Content(props) {
  return (
    <>
      <Sectioncontent>
        <Headcontent data={props.data} />

        <Bodycontent>
          
            <h1>{props.data.title}</h1>
          

          
            <h3>{props.data.description}</h3>
          
        </Bodycontent>
        <Footercontent>
          {props.data.imagecontent[0]}
          <div> {props.data.imagecontent[0]}</div>
          {props.data.imagecontent[1]}
          {props.data.imagecontent[2]}
        </Footercontent>
      </Sectioncontent>
    </>
  );
}
