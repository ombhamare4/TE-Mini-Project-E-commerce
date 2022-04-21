import Dropdown from "./DropdownMenu";
import { useState } from "react";
import classes from "./CustomForm.module.css";
import Button from "../UI/Button";

import CustomRam from "./Parts/CustomRam";
import CustomGraphicCard from "./Parts/CustomGraphicCard";
import CustomProcessor from "./Parts/CustomProcessor";
import CustomOS from "./Parts/CustomOs";
import CustomMotherBoard from "./Parts/CustomMotherBoard";
import CustomStorage from "./Parts/CustomStorage";

const CustomForm = () => {
  const [visible, setVisible] = useState(false);
  const [isBuilding, setIsBuilding] = useState("false");
  const optionRam = ["Corsair", "G.Skill", "Kingston", "HyperX", "Adata"];
  const [rselected, rsetSelected] = useState("Ram");
  const optionStorage = ["HDD", "SSD"];
  const [sselected, ssetSelected] = useState("Storage");
  const optionGraphic = ["Nvidia", "AMD"];
  const [gselected, gsetSelected] = useState("Graphic Card");
  const optionOs = ["Windows 11", "Windows 10", "Windows 8"];
  const [oselected, osetSelected] = useState("Operating system");
  const optionProcessor = ["Intel", "Ryzen"];
  const [pselected, psetSelected] = useState("Processor");
  const optionMother = ["MSI", "Asus", "Gigabyte", "Aorus"];
  const [mselected, msetSelected] = useState("MotherBoard");

  const checkValidation = () => {
    if (
      rselected !== "Ram" &&
      sselected !== "Storage" &&
      gselected !== "Graphic Card" &&
      oselected !== "Operating system" &&
      pselected !== "Processor" &&
      mselected !== "MotherBoard"
    ) {
      setIsBuilding(true);
      setVisible(true);
    }
  };
  return (
    <>
      <form>
        <h3 className={classes.h3}>Pick the specs...</h3>
        <div className={classes.contain}>
          <div className={classes.table}>
            <Dropdown
              selected={rselected}
              setSelected={rsetSelected}
              options={optionRam}
            />
            <Dropdown
              selected={sselected}
              setSelected={ssetSelected}
              options={optionStorage}
            />
            <Dropdown
              selected={gselected}
              setSelected={gsetSelected}
              options={optionGraphic}
            />
          </div>
          <div className={classes.table}>
            <Dropdown
              selected={oselected}
              setSelected={osetSelected}
              options={optionOs}
            />
            <Dropdown
              selected={pselected}
              setSelected={psetSelected}
              options={optionProcessor}
            />
            <Dropdown
              selected={mselected}
              setSelected={msetSelected}
              options={optionMother}
            />
          </div>
        </div>
        <div className={classes.box}>
          <Button onClick={checkValidation} className={classes.btn}>
            Build
          </Button>
        </div>
      </form>
      {/* {isBuilding && < Button onClick={checkValidation} className={classes.btn}>Build</Button>}
      {!isBuilding && <ComponentObtained/>} */}
      {visible && (
        <div className="bg-white p-3">
          <div>
            <CustomRam ram={rselected} />
            <CustomStorage storage={sselected} />
            <CustomGraphicCard graphiccard={gselected} />
            <CustomOS os={oselected} />
            <CustomProcessor processor={pselected} />
            <CustomMotherBoard motherboard={mselected} />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomForm;
