import React, { useMemo, useState } from 'react'
import { useProfiles } from '../context/ProfilesContext'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

function getDefaultExpiryDate() {
  const date = new Date()
  date.setFullYear(date.getFullYear() + 2)
  return date.toISOString().slice(0, 10)
}

function createDraft(overrides = {}) {
  return {
    name: '',
    quantity: '',
    expiresOn: getDefaultExpiryDate(),
    notes: '',
    ...overrides,
  }
}

export default function Pantry() {
  const { active, upsertItem, removeItem, updateItem, clearSection, sections } = useProfiles()
  const [section, setSection] = useState(sections[0])
  const [draft, setDraft] = useState(() => createDraft())
  const [editingId, setEditingId] = useState(null)
  const [clearDialogOpen, setClearDialogOpen] = useState(false)
  const nameInputRef = React.useRef(null)

  const list = useMemo(() => active.sections[section] || [], [active.sections, section])

  function resetDraft() {
    setDraft(createDraft())
    setEditingId(null)
    setTimeout(() => nameInputRef.current?.focus(), 0)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const name = draft.name.trim()
    if (!name) {
      toast.error('Item name is required')
      return
    }

    const payload = {
      name,
      quantity: draft.quantity.trim(),
      expiresOn: draft.expiresOn || null,
      notes: draft.notes.trim(),
    }

    if (editingId) {
      updateItem(section, editingId, payload)
      toast.success(`Updated ${name}`)
    } else {
      upsertItem(section, {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        ...payload,
      })
      toast.success(`Added ${name} to ${section}`)
    }
    resetDraft()
  }

  function startEdit(item) {
    setEditingId(item.id)
    setDraft({
      name: item.name || '',
      quantity: item.quantity || '',
      expiresOn: item.expiresOn ? normalizeDateInput(item.expiresOn) : getDefaultExpiryDate(),
      notes: item.notes || '',
    })
    toast.info(`Editing ${item.name}`)
  }

  function handleRemove(item) {
    removeItem(section, item.id)
    toast.warning(`Removed ${item.name}`)
  }

  function handleClearSection() {
    clearSection(section)
    resetDraft()
    setClearDialogOpen(false)
    toast.warning(`Cleared ${section}`)
  }

  function formatDate(value) {
    if (!value) return '—'
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  }

  function normalizeDateInput(value) {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value
    return date.toISOString().slice(0, 10)
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">{active.name} Inventory</h2>
          <p className="text-sm text-muted-foreground">Manage items across sections with full audit detail.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <Button
              key={s}
              variant={section === s ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                setSection(s)
                resetDraft()
              }}
            >
              {s}
            </Button>
          ))}
          <Button
            variant="destructive"
            size="sm"
            onClick={() => setClearDialogOpen(true)}
          >
            Clear {section}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-5 bg-card border rounded-xl p-4">
        <div className="md:col-span-2">
          <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-1">Item name</label>
          <input
            ref={nameInputRef}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            placeholder="e.g. Organic chicken thighs"
            value={draft.name}
            onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                resetDraft()
              }
            }}
            autoFocus
            required
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-1">Quantity</label>
          <input
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            placeholder="e.g. 4 packs"
            value={draft.quantity}
            onChange={(e) => setDraft((prev) => ({ ...prev, quantity: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-1">Expires on</label>
          <input
            type="date"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            value={draft.expiresOn || ''}
            onChange={(e) => setDraft((prev) => ({ ...prev, expiresOn: e.target.value }))}
          />
        </div>
        <div className="md:col-span-5">
          <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-1">Notes</label>
          <input
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            placeholder="e.g. use for client tasting"
            value={draft.notes}
            onChange={(e) => setDraft((prev) => ({ ...prev, notes: e.target.value }))}
          />
        </div>
        <div className="md:col-span-5 flex flex-wrap gap-2 justify-end">
          {editingId && (
            <Button type="button" variant="outline" onClick={resetDraft}>
              Cancel
            </Button>
          )}
          <Button type="submit">
            <Plus className="w-4 h-4" />
            {editingId ? 'Update' : 'Add Item'}
          </Button>
        </div>
      </form>

      {list.length === 0 ? (
        <div className="border border-dashed rounded-xl p-12 text-center text-muted-foreground">
          <p>No items yet. Add your first item above.</p>
        </div>
      ) : (
        <div className="border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.quantity || '—'}</TableCell>
                  <TableCell>{formatDate(item.expiresOn)}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={item.notes}>{item.notes || '—'}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon-sm" onClick={() => startEdit(item)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon-sm" onClick={() => handleRemove(item)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={clearDialogOpen} onOpenChange={setClearDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Clear {section}?</DialogTitle>
            <DialogDescription>
              This will permanently remove all {list.length} item(s) from {section}. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setClearDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleClearSection}>
              Clear Section
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
