import { useState } from "react";

const SegmentControl = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSegmentSelected = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <h2>Segment Control</h2>
      <SegmentControl
        name="exmaple"
        options={["option1", "option2"]}
        selected={selectedIndex}
        onSegmentChange={handleSegmentSelected()}
      />
    </div>
  );
};

export default SegmentControl;
