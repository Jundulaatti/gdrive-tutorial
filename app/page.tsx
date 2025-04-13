import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">My Drive</h1>
          <div className="space-x-2">
            <Button>New Folder</Button>
            <Button>Upload File</Button>
          </div>
        </div>

        {/* Content area - we'll add the file/folder grid here later */}
        <div className="bg-white rounded-lg shadow p-4 min-h-[500px]">
          <p className="text-gray-500 text-center">No files or folders yet</p>
        </div>
      </div>
    </main>
  );
}
