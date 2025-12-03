"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ContractUpload() {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [uploadedContracts, setUploadedContracts] = useState<any[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFiles = (newFiles: FileList) => {
    const fileArray = Array.from(newFiles).filter((file) => file.type === "text/csv" || file.type === "application/pdf")
    setFiles([...files, ...fileArray])
  }

  const handleUpload = async () => {
    setIsProcessing(true)
    // Simulate parsing contracts
    setTimeout(() => {
      const newContracts = files.map((file, idx) => ({
        id: idx,
        name: file.name,
        size: (file.size / 1024).toFixed(2),
        status: "parsed",
        itemsExtracted: Math.floor(Math.random() * 500) + 50,
        uploadedAt: new Date().toLocaleString(),
      }))
      setUploadedContracts([...uploadedContracts, ...newContracts])
      setFiles([])
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Upload Contracts</CardTitle>
          <CardDescription>
            Import CSV or PDF files from SAM.gov, state/local portals, or your vendor database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${
              dragActive ? "border-primary bg-primary/5" : "border-border bg-muted/30"
            }`}
          >
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Drag files here</h3>
            <p className="text-sm text-muted-foreground mb-4">or click to select CSV and PDF files</p>
            <input
              type="file"
              multiple
              accept=".csv,.pdf"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
              className="hidden"
              id="file-input"
            />
            <Button asChild>
              <label htmlFor="file-input" className="cursor-pointer">
                Select Files
              </label>
            </Button>
          </div>

          {files.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Files to Upload ({files.length})</h4>
              {files.map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setFiles(files.filter((_, i) => i !== idx))}>
                    Remove
                  </Button>
                </div>
              ))}
              <Button onClick={handleUpload} disabled={isProcessing} className="w-full">
                {isProcessing ? "Processing..." : "Parse & Upload"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {uploadedContracts.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Uploaded Contracts</CardTitle>
            <CardDescription>Recently processed contract files</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {uploadedContracts.map((contract) => (
                <div
                  key={contract.id}
                  className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <FileCheck className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-foreground">{contract.name}</h4>
                        <Badge variant="secondary">{contract.status}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground">Items Extracted</p>
                          <p className="text-foreground font-medium">{contract.itemsExtracted}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">File Size</p>
                          <p className="text-foreground font-medium">{contract.size} KB</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{contract.uploadedAt}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
