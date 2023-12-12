import { withInstall } from "@afe1-ui/utils";
import Button from "./src/button.vue";

export const AButton = withInstall(Button);
export type ButtonInstance = InstanceType<typeof Button>;

export default AButton;
