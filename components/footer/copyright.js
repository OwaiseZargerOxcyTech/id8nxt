export function Copyright({ textColor }) {
  return (
    <main className="w-full">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-0 flex justify-start items-center ">
        <p className="text-sm text-white/80" style={{ color: textColor }}>
          Developed by ID8NXT - Copyright © 2024 All Rights Reserved.
        </p>
      </div>
    </main>
  );
}
