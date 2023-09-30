import React, { ReactNode, useState } from "react";
import { Select } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { smsLanguage } from "@/shared/i18n/locales/fa";
import { useTag } from "@/shared/state-management/single-sms";

const AddTags = (): ReactNode => {
  const [selectedTag, setSelectedTag] = useState("");
  const addTag = useTag(state => state.addTag);
  const tags = useTag(state => state.tags);

  const handleClickTag = (): void => {
    if (!selectedTag || selectedTag.length === 0) return;
    addTag(selectedTag);
    setSelectedTag("");
  };

  return (
    <>
      {/*todo: duplicate validation*/}
      <Select
        placeholder={smsLanguage.sendSms.tagLabel}
        data={["تگ1", "تگ2", "تگ3"]}
        searchable
        disabled={tags.length > 9}
        onSearchChange={setSelectedTag}
        rightSection={<IconPlus className="cursor-pointer" onClick={handleClickTag} style={{ display: undefined }} />}
      />
      {tags.length === 10 ? <p className="text-[#e03131] text-xs my-2 ">{smsLanguage.sendSms.errorTag}</p> : null}
    </>
  );
};

export default AddTags;
