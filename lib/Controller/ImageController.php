<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2021 Julien Veyssier <eneiluj@posteo.net>
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Text\Controller;

use Exception;
use OCP\AppFramework\Http;
use OCA\Text\Service\ImageService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class ImageController extends Controller {

	/**
	 * @var string|null
	 */
	private $userId;
	/**
	 * @var ImageService
	 */
	private $imageService;

	public function __construct(string $appName,
								IRequest $request,
								ImageService $imageService,
								?string $userId) {
		parent::__construct($appName, $request);
		$this->userId = $userId;
		$this->imageService = $imageService;
		$this->request = $request;
	}

	/**
	 * @NoAdminRequired
	 */
	public function insertImageLink(string $link): DataResponse {
		$downloadResult = $this->imageService->insertImageLink($link, $this->userId);
		if (isset($downloadResult['error'])) {
			return new DataResponse($downloadResult, Http::STATUS_BAD_REQUEST);
		} else {
			return new DataResponse($downloadResult);
		}
	}

	/**
	 * @NoAdminRequired
	 */
	public function uploadImage(string $textFilePath): DataResponse {
		try {
			$file = $this->request->getUploadedFile('image');
			if ($file !== null && isset($file['tmp_name'], $file['name'])) {
				$newFileContent = file_get_contents($file['tmp_name']);
				$newFileName = $file['name'];
				$uploadResult = $this->imageService->uploadImage($textFilePath, $newFileName, $newFileContent, $this->userId);
				return new DataResponse($uploadResult);
			} else {
				return new DataResponse(['error' => 'No uploaded file'], Http::STATUS_BAD_REQUEST);
			}
		} catch (Exception $e) {
			return new DataResponse(['error' => 'Upload error'], Http::STATUS_BAD_REQUEST);
		}
	}
}
