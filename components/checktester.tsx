import { FC, Fragment } from "react";
import { Col } from "react-bootstrap";

export type checkerbox = {
  id: string,
  value: string,
  text: string,
} 

type checkboxProp = {
  checkerbox: checkerbox
}

const NewComponent: FC<checkboxProp> = ({checkerbox}) => {
    return (
      <Fragment>
        <Col className="col-sm-3 shadow">
          <div className="quiz_card_area">
            <input className="quiz_checkbox" type="checkbox" id={checkerbox.id} defaultValue={checkerbox.value}/>
            <div className="single_quiz_card">
              <div className="quiz_card_content">
                <div className="quiz_card_icon">
                  <h6 style={{fontWeight: '600'}}>{checkerbox.text}</h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Fragment>
    );
};
export default NewComponent;