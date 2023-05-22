# Modelo, Controlador y Rutas

## Modelo

Complete el modelo `Task` con el código aquí resaltado.

📃`./app/Models/Task.php`
```php{7,12,14,15,16,17,18}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory,
        SoftDeletes;
    
    protected $fillable = [
        'title',        
        'description',
        'done'
    ];
}
```

## Controlador

Complete su controlador de tareas con el código aquí resaltado.

📃`./app/Http/Controllers/TaskController.php`
```php{14,16,17,23,25,26,27,28,30,31,32,33,34,35,37,38,39,40,46,48,54,56,57,58,59,60,62,68,70,71,73}
<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Array
    {
        $tasks = Task::all()->toArray();
        return array_reverse($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        /*$task = Task::create([              
            'title' => $request->input('title'),
            'description' => $request->input('description')
        ]);*/

        $task = new Task([
            'title' => $request->title,
            'description' => $request->description
        ]);
        $task->save(); 
        $task->refresh();

        return response()->json([
            "taskId" => $task->id,
            "message"=> "The task successfully stored"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task): JsonResponse
    {
        return  response()->json($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task): JsonResponse
    {
        // $task->update($request->all());
        $task->title = $request->title;
        $task->description = $request->description;
        $task->done = $request->done;
        $task->save();

        return response()->json(["message"=> "The task successfully updated"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task): JsonResponse
    {
        //Task::destroy($task->id);
        $task->delete();
 
        return response()->json([], 204);
    }
    
}
```

## Rutas

Estas rutas que declararemos a continuación son suficientes para que la API (backend) brinde los recurso necesarios para el CRUD **ToDo**.

📃`./routes/api.php`
```php{5,22,23,24,25,26,27,28}
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
| Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
|     return $request->user();
| });
|
*/

Route::prefix('tasks')->group(function () {
    Route::get('/', [TaskController::class, 'index']);
    Route::get('/{task}', [TaskController::class, 'show']); 
    Route::post('/', [TaskController::class, 'store']);
    Route::put('/{task}', [TaskController::class, 'update']);
    Route::delete('/{task}', [TaskController::class,'destroy']);
});
```

Asegurémonos de declarar el uso del controlador de Tareas al inicio del correspondiente archivo.

---

>Llegado a este punto, la API (backend) de Laravel está literalmente lista para hacerle peticiones. Incluso, podemos probarla con alguna herramienta como [Postman](https://www.postman.com/).
