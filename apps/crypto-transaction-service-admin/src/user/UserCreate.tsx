import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { DAppInteractionTitle } from "../dAppInteraction/DAppInteractionTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="dAppInteractions"
          reference="DAppInteraction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DAppInteractionTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isVerified" source="isVerified" />
        <TextInput label="password" source="password" />
        <TextInput label="username" source="username" />
        <ReferenceArrayInput
          source="wallets"
          reference="Wallet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WalletTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
