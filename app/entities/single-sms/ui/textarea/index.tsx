import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { Textarea } from "@mantine/core";
import { smsLanguage } from "@shared/i18n/locales/fa";

const TextArea = (): ReactNode => {
  const [textSms, setTextSms] = useState("");
  const [hasUnicode, setHasUnicode] = useState(false);

  function isEnglishCharacter(character: string): boolean {
    const charCode = character.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (!event.target.value || event.target.value.length === 0) return;

    setTextSms(event.target.value);
  };
  const messageCount =
    textSms.length <= (hasUnicode ? 64 : 128) ? 1 : Math.ceil(textSms.length / (hasUnicode ? 64 : 128));
  useEffect(() => {
    if (!textSms || textSms.length === 0) return;
    setHasUnicode(!textSms.split("").every(character => isEnglishCharacter(character)));
  }, [textSms]);
  return (
    <>
      <Textarea
        error=""
        minRows={10}
        onChange={handleChange}
        required
        placeholder={smsLanguage.sendSms.textAreaPlaceholder}
      />
      <div className="flex items-center justify-between mt-1">
        <p className="text-sm">{hasUnicode ? "فارسی" : "انگلیسی"}</p>
        <p className="text-sm text-left">
          {textSms.length > 0 ? messageCount : 0} / {textSms.length}
        </p>
      </div>
      {/*<Grid.Col span={12}>
        <Grid.Col>
          <p className="text-xs">
            {smsLanguage.sendSms.textCharacterSms}: {textSms.length}
          </p>
        </Grid.Col>
        <Grid.Col>
          <p className="text-xs">
            {smsLanguage.sendSms.textCharacterSms}: {textSms.length > 0 ? messageCount : 0}
          </p>
        </Grid.Col>
        <Grid.Col>
          <p className="text-xs">
            {smsLanguage.sendSms.messageLang}: {hasUnicode ? "فارسی" : "انگلیسی"}
          </p>
        </Grid.Col>
      </Grid.Col>*/}
    </>
  );
};

export default TextArea;
