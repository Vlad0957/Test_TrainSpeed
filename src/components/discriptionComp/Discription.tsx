import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { changeDescription } from "../../features/train/train-slice";
import "./Description.css"

interface PropDiscription {
  setDescription: any;
  description: string;
  name: string;
  descrData: string
}

interface Style {

  backgroundColor: string
}
const style_1: Style = {
backgroundColor: ''
} 
const style_2: Style = {
  backgroundColor: '#b5e7a0'
}

function Discription(prop: PropDiscription) {
  const [descrView, setDescrView] = useState<boolean>(false);
  const [style, setStyle] = useState<Style>(style_1)
  const dispatch = useAppDispatch();

  return (
    <div 
    className='DescrForm'
    onMouseLeave={
      ()=>{
        if(descrView){
          // prop.setDescription(prop.descrData)

        }
        setDescrView(false);
        setStyle(style_1)
      }
    }
    >
      <label for="exampleFormControlTextarea1" className="form-label">
        Description
      </label>
      {!descrView && (
        <>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={style}
            value={prop.description}
          ></textarea>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{
              width: "65px",
            }}
            onClick={() => {
              setDescrView(true);
              setStyle(style_2)
            }}
          >
            Change
          </button>
        </>
      )}

      {descrView && (
        <>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={style}
            //  placeholder={prop.description}
            value={prop.description}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              prop.setDescription(event.target.value)
            }
          ></textarea>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{
              width: "65px",
            }}
            onClick={() => {
              dispatch(
                changeDescription({
                  description: prop.description,
                  nameOfTrain: prop.name,
                })
              );

              setDescrView(false);
              setStyle(style_1)
            }}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default Discription;
