import NAN from "../../../components/ui/notF";

export default function OFFLINE() {
  return (
    <NAN
      titl1="OOPS!"
      titl2="You are currently offline"
      desc="Please get back online and reconnect."
      action1={{ title: "Reconnect", url: "/?reload=true" }}
      action2={{ title: "", url: "" }}
    />
  );
}
