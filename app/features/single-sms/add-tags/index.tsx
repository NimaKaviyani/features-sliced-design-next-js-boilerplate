import React, { ReactNode, useEffect, useState } from "react";
import { Select } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { smsLanguage } from "@/shared/i18n/locales/fa";
import { useTags } from "@shared/state-management/tags";

const AddTags = (): ReactNode => {
  const [selectedTag, setSelectedTag] = useState("");
  const addTag = useTags(state => state.addTag);
  const tags = useTags(state => state.tags);

  const handleClickTag = (): void => {
    if (!selectedTag || selectedTag.length === 0) return;
    addTag(selectedTag);
    setSelectedTag("");
  };
  const handleKeyDownTag = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (!selectedTag || selectedTag.length === 0) return;
    if (event.key === "Enter") {
      addTag(selectedTag);
    }
    setSelectedTag("");
  };

  useEffect(() => {
    console.log({ tags });
    console.log({ selectedTag });
  }, [selectedTag]);
  return (
    <>
      {/*todo: duplicate validation*/}
      <Select
        placeholder={smsLanguage.sendSms.tagLabel}
        data={["تگ1", "تگ2", "تگ3"]}
        searchable
        disabled={tags.length > 9}
        onKeyDown={handleKeyDownTag}
        onSearchChange={setSelectedTag}
        rightSection={<IconPlus className="cursor-pointer" onClick={handleClickTag} style={{ display: undefined }} />}
      />
      {tags.length === 10 ? (
        <p className="text-rose-400 text-xs my-2 "> حد مجاز اضافه کردن شما به پایان رسیده است!</p>
      ) : null}
    </>
  );
};

export default AddTags;
