import { ConfettiDemo } from "@/components/ui/confetti";

export default function SendEmail({ email, SUBSCRIBE, status, loading, text }) {
  return (
    <>
      {loading ? (
        <span className="text-white">Subscribing...</span>
      ) : (
        <>
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
            onClick={SUBSCRIBE}
            style={{ display: "block" }}
          >
            {text}
          </button>
          {status.success ? (
            <span className="text-green-500">{status.message}</span>
          ) : (
            <span className="text-red-500">{status.message}</span>
          )}
          {status.success && <ConfettiDemo />}
        </>
      )}
    </>
  );
}
