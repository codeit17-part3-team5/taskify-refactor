import Button from "./components/Button";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="typo-32-b mb-4">Taskify</h1>
      <div className="w-35">
        <p className="bg-primary-tw text-white typo-32-m p-2">
          Refactoring Start (dev 브랜치에 병합)
        </p>
      </div>
      <Button className="w-30 h-12" variant="w">
        로그인
      </Button>
    </main>
  );
}
