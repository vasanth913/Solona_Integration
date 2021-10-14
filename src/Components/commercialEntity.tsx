import React, { useEffect, useState } from "react";
import { Form , Figure } from 'react-bootstrap';
import CircleBlock from '../Components/images/CircleBlock.png';

const CommercialEntity = () => {

  const [GenerateGreenImage, setGenerateGreenImage] = useState("");

  const GenerateGreenSubstanability = (event) => {
    setGenerateGreenImage(event.target.value);
  }

  return (
    <>
     <div className="form-group">
          <Form.Select  onChange={(event)=> GenerateGreenSubstanability(event)} aria-label="Default select example">
              <option value="Select Generate Green and Sustainability Scores">Select Generate Green and Sustainability Scores</option>
              <option value="RedStone Electronics Pte. Ltd.">RedStone Electronics Pte. Ltd.</option>
              <option value="BlueForest Phones Pte. Ltd.">BlueForest Phones Pte. Ltd.</option>
              <option value="VKB Recyclers co.">VKB Recyclers co.</option>
              <option value="SecondLife Goods Pte. Ltd.">SecondLife Goods Pte. Ltd.</option>
              <option value="Indigo Commercial Bank">Refurbisher</option>
          </Form.Select>
      </div>
      {
        GenerateGreenImage === "RedStone Electronics Pte. Ltd." ?
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={CircleBlock}
        />
      </Figure>
      : ''
      }
      {
        GenerateGreenImage === "BlueForest Phones Pte. Ltd." ?
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={CircleBlock}
        />
      </Figure>
      : ''
      }
      {
        GenerateGreenImage === "VKB Recyclers co." ?
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={CircleBlock}
        />
      </Figure>
      : ''
      }
      {
        GenerateGreenImage === "SecondLife Goods Pte. Ltd." ?
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={CircleBlock}
        />
      </Figure>
      : ''
      }
   </>
  )

}

export default CommercialEntity;